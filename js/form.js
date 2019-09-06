function check(form)
{
 
 if((form.userid.value == "talha zain" && form.pswrd.value == "1"))
  {
    window.open('pages/lms/MSCS/talhazain.html')
  }
  else if((form.userid.value == "khurram" && form.pswrd.value == "2"))
  {
    window.open('pages/lms/MSCS/khurram.html')
  }
  else if((form.userid.value == "faizan" && form.pswrd.value == "3"))
  {
    window.open('pages/lms/MSCS/faizan.html')
  }
  else if((form.userid.value == "imdad" && form.pswrd.value == "AA"))
  {
    window.open('pages/lms/MSCS/imdad.html')
  }
  else if((form.userid.value == "talha baloch" && form.pswrd.value == "4"))
  {
    window.open('pages/lms/MSCS/talhabaloch.html')
  }
  else if((form.userid.value == "fahad" && form.pswrd.value == "11"))
  {
    window.open('pages/lms/BEE/fahad.html')
  }
  else if((form.userid.value == "ausajha" && form.pswrd.value == "12"))
  {
    window.open('pages/lms/BEE/ausajha.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}