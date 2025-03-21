$(function() {
    const loginWrap = document.querySelector('.login-wrap');
   
    $("#loginForm").on('submit', function(e) {
      e.preventDefault();
  
      const userid = $("#userid").val();
      const password = $("#password").val();
      try {
        $.ajax({
            url: 'http://localhost:3000/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ userid, password }),
            success: function(response) {
                localStorage.setItem('token', response.token);
                loginWrap.innerHTML = `${userid}님 환영합니다`;
                alert("성공적으로 토큰이 발급되었습니다.");
            },
            error: function(xhr) {
                alert(xhr.responseJSON.message);
            }
        });
      } catch (error) {
        console.log(error.message)
      }
    });
  
    const tokenValid = () => {
      const token = localStorage.getItem('token');
      if(!token) return;
  
      $.ajax({
            url: 'http://localhost:3000/token-valid',
            type: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            success: function(data) {
                loginWrap.innerHTML = `${data.userId}님 환영합니다`;
            },
            error: function(xhr) {
                if(xhr.status == 401) {
                  console.log(xhr.responseJSON.message)
                }
            }
        });
    }
  
    tokenValid();
  });