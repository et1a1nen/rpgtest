#pragma strict

function Start () {

}

function Update () {
      
//  /////////////////////
//  //keyboard scrolling
//  
//  var translationX : float = Input.GetAxis("Horizontal");
//  var translationY : float = Input.GetAxis("Vertical");
//  var fastTranslationX : float = 2 * Input.GetAxis("Horizontal");
//  var fastTranslationY : float = 2 * Input.GetAxis("Vertical");
//  
//  if (Input.GetKey(KeyCode.LeftShift))
//    {
//    transform.Translate(fastTranslationX + fastTranslationY, 0, fastTranslationY - fastTranslationX);
//    }
//  else
//    {
//    transform.Translate(translationX + translationY, 0, translationY - translationX); 
//    }
//
//  //////////////////
//  //rotating
//  if (Input.GetKey(KeyCode.LeftControl))
//    {
//    transform.Rotate(0, translationX, 0);
//    }
//    
  ////////////////////
  //mouse scrolling
  
  var mousePosX = Input.mousePosition.x;
  var mousePosY = Input.mousePosition.y;
  var scrollDistance : int = 5;
  var scrollSpeed : float = 70;

  //Horizontal camera movement
  if (mousePosX < scrollDistance)
    //horizontal, left
    { 
    transform.Translate(-2, 0, 2);
    } 
  if (mousePosX >= Screen.width - scrollDistance)
    //horizontal, right
    { 
    transform.Translate(2, 0, -2);
    } 

  //Vertical camera movement
  if (mousePosY < scrollDistance)
    //scrolling down
    {
    transform.Translate(-2, 0, -2);
    } 
  if (mousePosY >= Screen.height - scrollDistance)
    //scrolling up
    {
    transform.Translate(2, 0, 2);
    }
  
  ////////////////////
  //zooming
  var Eye : GameObject = GameObject.Find("Eye");
  
  //
  if (Input.GetAxis("Mouse ScrollWheel") > 0 && Eye.camera.orthographicSize > 4)
    {
    Eye.camera.orthographicSize = Eye.camera.orthographicSize - 4;
    }
  
  //
  if (Input.GetAxis("Mouse ScrollWheel") < 0 && Eye.camera.orthographicSize < 80)
    {
    Eye.camera.orthographicSize = Eye.camera.orthographicSize + 4;
    }

  //default zoom
  if (Input.GetKeyDown(KeyCode.Mouse2))
    {
    Eye.camera.orthographicSize = 50;
    }
   

//  ////////////////////
//  //moving with pressed leftbutton
//  if (Input.GetMouseButton(0)) 
//  	{
//  	transform.position += transform.right * Input.GetAxis("Mouse X") * (-1);
//	transform.position += transform.up * Input.GetAxis("Mouse Y") * (-1);
//	}
}