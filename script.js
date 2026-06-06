function start()
{
  
  function generatepassword(length,includelowercase,includeuppercase,includesymbols,includenumbers)
  {
     const lowercasechars = "abcdefghijklmnopqrstuvwxyz";  // Storing characters , numbers , symbols for furthur use 
     const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const numbers = "0123456789";
     const symbols = "!@#$%^&*?_~,;|";

      let allowedchars = "";
      let password = "";

      allowedchars += includelowercase ? lowercasechars : "";   // adding only the selected characters to the 'allowedchars'
      allowedchars += includeuppercase ? uppercasechars : "";
      allowedchars += includesymbols ? symbols : "";
      allowedchars += includenumbers ? numbers : "";

      if(length<=0)
      {
        return `(Password length must be greater than zero)`;
      }
      if(allowedchars.length == 0)                                    // here im checking for any wrong type of inputs 
      {
        return `(At least 1 set of characters needed to be selected)`;
      }

            for(let i = 0; i < length ; i++)
              {
                const randomindex = Math.floor(Math.random() * allowedchars.length);     // finding a random index for each cycle
                password = password + allowedchars[randomindex];                           //continuously adding the random characters, one character each time randomly(CONCATINATING)
              }                                                       


   return password ;  //returning the password
  }


  // from here iam giving values and calling the function
  const passwordlength = document.getElementById("passwordlen").value;
  const includelowercase = document.getElementById("1").checked;
  const includeuppercase = document.getElementById("2").checked;     //linking the checkboxs to the javascript part
  const includesymbols = document.getElementById("3").checked;
  const includenumbers = document.getElementById("4").checked;


  const password = generatepassword(passwordlength,
                                   includelowercase,
                                   includeuppercase,   //here i have called the 'generatepassword' function
                                   includesymbols, 
                                   includenumbers);

   document.getElementById("result").textContent = password; //sending value to the paragraph

}


//From here is the copy password work
function copypassword()
{
    const passwordtext  = document.getElementById("result").textContent;

    navigator.clipboard.writeText(passwordtext).then(() =>     // this is the modern clipboard API
      {
        
        document.getElementById("copybutton").textContent = "copied!"

      } );

}