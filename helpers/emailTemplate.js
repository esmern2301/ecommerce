function emailTemplate(token){
   return `<div><h1 style="@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap');font-family:'DM Sans',sans-serif">OREBI ECOMMERCE</h1><p style="@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap');font-family:'DM Sans',sans-serif;font-size:20px;font-weight:700">Please Verify your email address</p>, ${token} <a href=""style="@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap');font-family:'DM Sans',sans-serif;font-size:18px;font-weight:700;background-color:#262626;color:#fff;text-decoration:none;padding:10px">Confirm your verification</a></div>`
}
module.exports = emailTemplate