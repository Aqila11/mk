<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <!-- tailwind -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <link rel="stylesheet" href="style.css" />
    <!-- bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <!-- gsap -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <title>MPK 91</title>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">
        <a href="#">
          <img src="LOGO MPK (1).png" alt="logo" />
          <div class="judul">
            <span class="txt1">MPK 91</span>
            <span class="txt2">Majelis Permusyawaratan Kelas </span>
          </div>
        </a>
      </div>
      <div class="nav-u">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#Tentang">Tentang</a></li>
          <li><a href="#Galeri">Galeri</a></li>
          <li><a href="#KotakSuara">Kotak Suara</a></li>
          <!-- dropdown -->
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Divisi
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">BPH</a></li>
              <li><a class="dropdown-item" href="#">Komisi A</a></li>
              <li><a class="dropdown-item" href="#">Komisi B</a></li>
              <li><a class="dropdown-item" href="#">Komisi C</a></li>
              <li><a class="dropdown-item" href="#">Komisi D</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- hamburger menu -->
      <div class="nav-ex">
        <a href="#" id="hamburger-menu"> <i data-feather="menu"> </i> </a>
      </div>
    </nav>
    <!-- main section -->
    <section class="main">
      <div class="main-content">
        <h1>Selamat Datang</h1>
        <p>
          Website MPK ini dibuat untuk mempermudah komunikasi antara anggota MPK
          dan siswa-siswi SMAN 1 Garut. Disini kalian bisa melihat informasi
          terbaru mengenai kegiatan MPK dan juga kotak suara untuk memberikan
          masukan atau saran.
        </p>
        <a href="#KotakSuara" class="btn">Berikan Masukan</a>
      </div>
    </section>
    <div class="content">
      <!-- <h1 id="scramble-text">000000</h1> -->
      <section class="abt">
        <div class="textc">
          <h1>Tentang MPK 91</h1>
          <p>
            MPK 91 adalah majelis permusyawaratan kelas yang berada di SMAN 1
            Garut. MPK 91 bertujuan untuk menjadi wadah komunikasi antara siswa
            dan guru, serta sebagai sarana untuk menyalurkan aspirasi dan
            ide-ide positif dari siswa.
          </p>
        </div>
        <img src="./logo.png" alt="MPK 91" />
      </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
    <script>
      feather.replace();
    </script>
    <!-- jawa -->
    <script src="js/jawa.js"></script>
  </body>
</html>
