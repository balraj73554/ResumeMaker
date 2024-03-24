
let gotName;
let gotAddress;
let gotMobile;
let primaryEducation;
let secondaryEducation;

function getSubmitValue(){

     gotName = document.querySelector('.User-name').value;

    gotAddress = document.querySelector('.User-address').value;
    
    gotMobile = document.querySelector('.User-mobile').value;

    primaryEducation = document.querySelector('.Primary-education').value;

    secondaryEducation = document.querySelector('.Secondary-education').value;

// btn_value = document.querySelector('.submit-Btn').innerHTML;

// let nameValue = document.querySelector('.User-name').value; 

// let addressValue = document.querySelector('.User-address').value;

// let mobileValue = document.querySelector('.User-mobile').value;

// console.log(nameValue);
// console.log(addressValue);
// console.log(mobileValue);

if(gotName=='' || gotAddress=='' || gotMobile==''){
    alert('Please Enter Proper Details!');;
}

fu();
}


function fu() {
    var opened = window.open("index2.html",'w');
    opened.document.write(`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download Resume</title>
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family:Arial, Helvetica, sans-serif;
            }
            .container{
                width: 100vw;
                height: 100vh;
                background-color: rgb(24, 130, 160);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .resume{
                margin: .5em 1em;
                background-color: rgba(255, 255, 255, 0.785);
                border: 1px solid black;
                border-radius:.2em;
                height: 95vh;
                padding: 2em;
                display: flex;
                flex-direction: column;
                gap: 0;
            }
            .resume-heading{
                color:black;
                font-size: 2em;
                text-align: center;
                margin-bottom:2em;
            }
            .header{
                padding: 2em;
                margin-bottom: 1em;
            }
            .education-section{
                border: 1px solid tomato;
            }
            .upper-data{
                margin-top: 0em;
                word-spacing: .2em;
                letter-spacing: .03em;
            }
            .got-data{
                font-size: 1.2em;
                line-height: 1.3em;
            }
            .print-btn{
                width: 5em;
                font-size: 1em;
                padding: .4em .6em;
                background-color: black;
                color:white;
                border: none;
                border-radius: .3em;
                position: absolute;
                bottom: 5em;
                right: 5em;
            }
            .photo-box{
                border: 1px solid black;
                width: 150px;
                height: 160px;
                position: absolute;
                top: 9em;
                right: 5em;
                padding: 1em;
                color:gray;
            }
            .upperLine{
                width: 100%;
                height: 1.5em;
                background-color: rgb(62, 133, 199) !important;
                position: relative;
                top: 2em;
                color:white;
                line-height: 1.5em;
                letter-spacing: .1em;
                font-size: 1.1em;
            }
            .upperLine p{
                margin-left:1.5em ;
            }
            .education-box{
                position: relative;
                top:2em;
                left: 4em;
                height: auto;
                width: 40%;
                padding: .2em;
                margin:.6em;
            }
    
            @media (max-width:630px) {
              .print-btn{
                position: absolute;
                bottom: .5em;
                right: .5em;
              }  
              .resume{
                padding: .4em;
              }
              .photo-box{
                border: 1px solid black;
                width: 80px;
                height: 80px;
                position: absolute;
                top: 5em;
                right: 2em;
                padding: 1em;
                color:gray;
            }
            .upper-data{
                margin-top: 0em;
                word-spacing: .1em;
                letter-spacing: .03em;
            }
            .got-data{
                font-size: 1em;
                line-height: 1.3em;
            }
            .header{
                padding: .5em;
                margin-bottom: .5em;
            }
            .resume-heading{
                margin-bottom: .8em;
            }
            .upperLine{
                width: 100%;
                height: 1.5em;
                background-color: rgb(62, 133, 199) !important;
                position: relative;
                top:.5em;
                color:white;
                line-height: 1.5em;
                letter-spacing: .1em;
                font-size: 1em;
            }
            .upperLine p{
                margin-left:1.5em ;
            }
            .education-box{
                position: relative;
                top:.2em;
                left: 4em;
                height: auto;
                width: 90%;
                line-height: 1.3em;
            }
    
            }
        </style>
    </head>
    <body>
        <div class="contaier">
    
            <div class="resume">
                <!-- Header -->
                  <div class="header">
                <h2 class="resume-heading">Resume</h2>
    
                <div class="upper-data">
                    <p class="name got-data">Name: ${gotName} </p>
                    <p class="address got-data">Address: ${gotAddress}</p>
                    <p class="mobile got-data">Mobile No. : ${gotMobile} </p>
                </div>
                <div class="photo-box">
                    Pasport-size Photo
                    </div>
                </div>
    
                <!-- Education-section -->
                <div class="Education-section">
             <div class="upperLine"><p> Education Qualification</p></div>
                </div>
            
                <div class="education-box">
                    <ul>
                        <li><p class="primary-education">${primaryEducation}</p></li>
                        <li><p class="secondary-education">${secondaryEducation}</p></li>
                    </ul>
             </div>
                </div>
    
    
                <!-- Skill-section -->
    
    
                <button onclick="printResume();" class="print-btn">Print</button>
                
            </div>
      
        </div>
    
        <script>
            function printResume(){
            document.querySelector('.print-btn').body = print();
            }
        </script>
    </body>
    </html>

    `);
  }
