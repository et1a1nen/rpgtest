#pragma strict

var reached : boolean;
var speed : float;
var destination : Vector3;
var moveTime : float;
var distance : float;

function Start () {
}

function Update () {
  var translationX : float = Input.GetAxis("Horizontal");
  var translationY : float = Input.GetAxis("Vertical");
  var fastTranslationX : float = 2 * Input.GetAxis("Horizontal");
  var fastTranslationY : float = 2 * Input.GetAxis("Vertical");
  var Eye : GameObject = GameObject.Find("Eye");
  var width : float = this.renderer.bounds.max.x-this.renderer.bounds.min.x;
  var length : float = this.renderer.bounds.max.z-this.renderer.bounds.min.z;
  var height : float = this.renderer.bounds.max.y-this.renderer.bounds.min.y;
  
  if (Input.GetKey(KeyCode.LeftShift))
    {
    transform.Translate(fastTranslationX + fastTranslationY, 0, fastTranslationY - fastTranslationX);
    }
  else
    {
    transform.Translate(translationX + translationY, 0, translationY - translationX); 
    }
    
  //if (Input.GetMouseButton(0))
  if (Input.GetKeyDown(KeyCode.Mouse1))
  	{
  	var ray = Eye.camera.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit))
    	{
    	destination = hit.point+Vector3(0,height/2,0);
        Debug.Log("Destination: "+destination);
        distance = Vector3.Distance(transform.position,destination);
        moveTime = Time.time;
        reached = false;
		} 
  	}
  	
  if (Input.GetKeyDown(KeyCode.Space))
  	{
  	Debug.Log("Position: "+transform.position);
  	Debug.Log("Height: "+height+" "+"Width: "+width+" "+"Length: "+length);
  	}

  if (!reached)
  	{
  	var step = (Time.time - moveTime)*speed/distance;
  	Debug.Log("Position: "+transform.position);
  	//transform.Translate(Time.deltaTime*speed*(destination.x - transform.position.x), 0, Time.deltaTime*speed*(destination.z - transform.position.z));
  	transform.position = Vector3.Lerp(transform.position, destination, step);
  	//transform.position = Vector3.Lerp(transform.position, destination, Time.deltaTime*speed);
  	Debug.Log ("Units left: "+(transform.position.x - destination.x));
  	if (Mathf.Abs(destination.x - transform.position.x) <= 0.5  && Mathf.Abs(destination.z - transform.position.z) <= 0.5)
  		{
  		reached = true;
  		Debug.Log("REACHED!");
  		}
  	}
//  //moving with pressed leftbutton
//  if (Input.GetMouseButton(0)) 
//  	{
//  	transform.position += transform.right * Input.GetAxis("Mouse X") * (-1);
//	transform.position += transform.up * Input.GetAxis("Mouse Y") * (-1);
//	}
}