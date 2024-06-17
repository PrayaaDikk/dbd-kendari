$(document).ready(function () {
  // nav popup
  $("#hamburger").click(function () {
    $("#popup").toggleClass("max-[639px]:block max-[639px]:hidden");
  });

  // tabel data dbd
  $.ajax({
    url: "../data/dbd.json",
    success: (results) => {
      const data = results;
      let row = "";

      data.forEach((data) => {
        row += `
          <tr>
            <td>${data.kecamatan}</td>
            <td>${data.kasus23}</td>
            <td>${data.meninggal23}</td>
            <td>${data.kasus24}</td>
            <td>${data.meninggal24}</td>
          </tr>
        `;
      });

      document.querySelector("tbody").innerHTML = row;
    },

    error: (error) => {
      console.log("Tidak bisa menghubungkan data:", error);
    },
  });
});
