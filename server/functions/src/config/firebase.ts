
import * as admin from "firebase-admin"

const keyStff = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDlLgHQhyxOU5Nl\nAARR1FTXiXIhiJ0XKLYx+3i59fFRYIICSDoLCH+S+/tstS+M158OL74UtuZXExmE\nQVCcKoXA5va2hE6DzF/AgCcBc/sr0jJkfBfzMqBS9ZT66M6m03t4Yo544QpSWnsZ\n7KggqaH49xi0jrfCVHyBA6HD/+WdbiyMu7NZa4Y3kI1G+6jq55pVBaisoexfiFJ9\nwx4igJfW38BkM7t2JI6S86xvmAJEnJlB+NfCmGjK3foyW+C8O2uwir6F/d6dBsph\nwETnOupujA3vf+Ln14Vk+lRGDrwMGWKol5qvy83d/mb84AuAZRqZkj5iVbV5biTQ\n6UX4ulRHAgMBAAECggEANMXCTzVBI4wlLaWyWPFu0+7nZAdkPPf39Ex2wUN73QQ/\nC618CBxd3AfAHokeOO1Rx9+Agp6XLcfNIWI04LD9+ax1dRPETJ8cEWSxFqmRVcbi\nKbdVgH/Q4SmBs8E2DL43+UGgkv8m9E23eQHAuTy2enDTtIgEknAH92FRt6NOSVCs\nyIx3Tz3BIxqh6/YycE4d1j6oC2QCPmXnDNzFLCgC6I+yCcnPs5xUh89QxLE+EZw6\n3d7m84C4jGPgEVzuKZeGJ5XDGfvi67dAyPLCmHP2F2O6OPlGqEruDcZRUtCm6PBA\nVwE9MEiLYathayofwlexRMZqlYz0iBZHUjVdZFbdcQKBgQD3HS0N+fbNckfQAJtV\nRJ2lmmqYjIygEhv1eacbGQPjP9G9K1Rs12swQIwiikgtdOWWl8mY1gv3WiRR0nz/\nn/6yhOmWXHctD1O2k6u/YFTqKWDH9/boiuD52J3tCDwmW0l/ml+S4YDSTSnrB0G+\nAOepP6AFBlCB5jOAMv3SxTOEGQKBgQDta7xzVbNhI2cnqVc+jhsq41gi1eZZPScP\nDfxBT+86BGjpQmiRyhDhzjm6CetgQYUG8Bzx5tZey5fF+OI6r+DIuW5SY6lAFvee\nkKmBSErxcBt8lA0ZEykouPPNmTlFX86x2zdMOo9i3xIlXgEMzqtNagh9yrMcysWJ\nCuIcGPCnXwKBgQCldim21AqHYd/nzKA1pe4Q9qYtYt6+R6Hk6gIUSNmrjg34Jk0v\nW8Zv1qh+cC0IEt+vyA66gYgdpYPwLYp49z5pdkmZ3mwGBd89vv8e83eoGvCstMHk\nzyj44ixMjFkKLdG22Tzpcoj5R6Wrs343pQ946htRgfriH6uYSYxfVp+58QKBgQCu\ndVUjtty5y0b4iOG38Lob2LSh3GWIO3xg/pjW8ULLcgQZKxgl0MJ4+o3Gm5VexKZY\ng8XxJvts6tOawJiUITrepAth9SOgGYBY/tnfStzu7r7z2uKJA2BiMQ3NjQLdbFo4\nrOnEVN+Z+mqeFKZW3+JWX0zgCjt1M7bVTa76kIT9pwKBgQC5dIN0D7D4bcJo7MsL\nJuRumfPgh6897rnhP7IVcNn8Lv9ZZSDPeTADsZDwG8fpT+E7da1Zg1eqEyQQs6Kq\nOoEGin3Coscy2Q9egcDW4FnQecV/Umh/64TGsY7daiiq4LxElakT0fK/BkRhtx3u\nMCTh7ItJTaXYilMYMfEJ3sf7jA==\n-----END PRIVATE KEY-----\n"
admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: keyStff.replace(/\\n/g, '\n'),
      projectId: "tapandpay-c18f4",
      clientEmail: "firebase-adminsdk-hmksb@tapandpay-c18f4.iam.gserviceaccount.com"
    }),
    databaseURL: 'https://tapandpay-c18f4.firebaseio.com'
  })
// console.log("here: ", projec)
  
  const db = admin.firestore()
  export { admin, db }