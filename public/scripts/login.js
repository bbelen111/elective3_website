document.addEventListener("DOMContentLoaded", () => {

  // forget password modal
  document.querySelector("a[href='#forgot']").addEventListener("click", (e) => {
    e.preventDefault();


    Swal.fire({
      title: 'Forgot Password',
      input: 'email',
      inputLabel: 'Enter your email address',
      inputPlaceholder: 'you@example.com',
      confirmButtonText: 'Continue',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
      heightAuto: false,
      allowOutsideClick: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  });

  // login animation modal
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Logging you in...',
      allowOutsideClick: false,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // fake loading
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  });
  
});
