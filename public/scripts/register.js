document.addEventListener("DOMContentLoaded", () => {

  // registration animation modal
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Creating your account...',
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