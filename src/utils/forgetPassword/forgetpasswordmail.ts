export const otpTemplate = (otp: any) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forget-Password Email</title>
        <style>
            img{
                max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;   
            }
        </style>
    </head>
    <body>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKH27GbiZXXGMLC1AgK6yxkkJ6mfd0lGVZC-IG4Mugw&s" >
        <div style="text-align: center;">
        <h2>Greetings from House Of Geeks,</h2>
        <p>I hope this email finds you well. It seems that you've forgotten your password.To reset your Password use this ${otp}. </p>
        <h4>Best Regards,House of Geeks</h4>
        <h3>ThankYou for visiting Us !</h3>
    </div>
    
    </body>
    </html>
    `;
};

export default otpTemplate;
