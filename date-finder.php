<?php
//------------------------------------------------------
// DATABASE CONNECTION
//------------------------------------------------------
$host = "localhost";
$user = "root";
$pass = "Ap2008ngm@khag";
$db   = "ideas";

$conn = new mysqli($host, $user, $pass, $db);

$results = [];
$error_message = "";
$search_date_display = "";
$saved_message = "";


// ----------------------------------------------------
// 1) SAVE NAME + DATE WHEN USER CLICKS "SAVE"
// ----------------------------------------------------
if (isset($_POST["save_date"]) && isset($_POST["save_name"])) {

    $date_to_save = $_POST["save_date"];
    $name_to_save = $_POST["save_name"];

    $save = $conn->prepare("INSERT INTO searched (date, name) VALUES (?, ?)");
    $save->bind_param("ss", $date_to_save, $name_to_save);

    if ($save->execute()) {
        $saved_message = "✅ Saved successfully: $date_to_save ($name_to_save)";
    } else {
        $saved_message = "❌ Failed to save data.";
    }
}


// ----------------------------------------------------
// 2) SEARCH LOGIC
// ----------------------------------------------------
if (isset($_POST["search_date"])) {
    $input = trim($_POST["search_date"]);

    // mm/dd only
    if (preg_match("/^\d{1,2}\/\d{1,2}$/", $input)) {
        $error_message = "❌ MM/DD is not enough. Please enter full YYYY/MM/DD.";
    }

    // yyyy/mm/dd format
    if (preg_match("/^\d{4}\/\d{2}\/\d{2}$/", $input)) {
        $search_date_display = $input;

        $query = $conn->prepare("SELECT notes, symbols, date FROM money WHERE date = ?");
        $query->bind_param("s", $input);
        $query->execute();
        $results = $query->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    // invalid format
    if ($search_date_display == "" && $error_message == "") {
        $error_message = "❌ Invalid date. Use YYYY/MM/DD.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Date Finder</title>

<!-- GOOGLE FONTS -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
    body {
        margin: 0;
        font-family: Poppins, sans-serif;
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        background-attachment: fixed;
        color: white;
    }

    /* NAVBAR */
    .navbar {
        width: 100%;
        padding:  0;
        background: rgba(0,0,0,0);
        backdrop-filter: blur(10px);
        position: sticky;
        top: -20;
        z-index: 0;
        display: flex;
        justify-content: right;
    }

    .nav-links a {
        margin: 0 25px;
        text-decoration: none;
        color: #00eaff;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
    }

    .nav-links a:hover {
        color: white;
        text-shadow: 0 0 10px cyan;
    }

    /* MAIN BOX */
    .container {
        max-width: 850px;
        margin: 60px auto;
        padding: 30px;
        border-radius: 20px;
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 25px rgba(0,0,0,0.3);
    }

    input, button {
        outline: none;
    }

    table tr:nth-child(even){
        background: rgba(255,255,255,0.05);
    }

    table tr:nth-child(odd){
        background: rgba(255,255,255,0.15);
    }

    /* PAGES HIDDEN */
    .page {
        display:none;
        max-width:800px;
        margin:40px auto;
        padding:25px;
        border-radius:20px;
        background:rgba(255,255,255,0.1);
        backdrop-filter:blur(20px);
        color:white;
    }
   footer {
        background: rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
        margin-top: 40px;
    }
</style>
</head>

<body>

<!-- NAVBAR --><h1 align="left" style="text-align:left;font-size:36px;">🔍 Date Finder</h1>
<div class="navbar">
    <div class="nav-links"> 

        <a onclick="showPage('home')">Home</a>
        <a onclick="showPage('about')">About Us</a>
        <a onclick="showPage('contact')">Contact</a>
    </div>
</div>


<!-- ABOUT PAGE -->
<div id="aboutPage" class="page">
    <h2>About Us</h2>
    <p style="font-size:18px;line-height:1.7;">
        Welcome to our Date Finder website!  
        This tool helps you search dates, check saved records, and store 
        your own searched history.  
        We aim to make your experience simple, fast, and useful.
    </p>
</div>

<!-- CONTACT PAGE -->
<div id="contactPage" class="page">
    <h2>Contact Us</h2>
    <p style="font-size:18px;">
        Have feedback or questions? Send us a message!
    </p>

    <input type="text" placeholder="Your Name"
        style="width:100%;padding:12px;margin-top:10px;border-radius:10px;border:none;background: rgba(255, 255, 255, 0.05);color:white;">

    <input type="email" placeholder="Your Email"
        style="width:100%;padding:12px;margin-top:10px;border-radius:10px;border:none;background:rgba(255,255,255,0.05);color:white;">

    <textarea placeholder="Your Message"
        style="width:100%;padding:12px;margin-top:10px;border-radius:10px;border:none;height:120px;background:rgba(255,255,255,0.05);color:white;"></textarea>

    <button style="margin-top:15px;padding:12px 25px;background:#00d4ff;border:none;border-radius:10px;font-size:18px;color:black;font-weight:bold;">
        Send Message
    </button>
</div>


<!-- HOME PAGE (MAIN CONTAINER) -->
<div class="container" id="homePage">

    <h1 style="text-align:center;font-size:36px;">🔍 Date Finder</h1>

    <!-- SEARCH FORM -->
    <form method="POST" style="margin-top:25px;">
        <input 
            type="text" 
            name="search_date" 
            placeholder="Enter date (YYYY/MM/DD)" 
            required
            style="width:100%;padding:15px;border-radius:10px;border:none;margin-bottom:15px;font-size:18px;background:rgba(255,255,255,0.05);color:white;"
        >
        <button style="width:100%;padding:15px;background:#00d4ff;border:none;border-radius:10px;font-size:18px;font-weight:bold;color:black;">
            Search Now
        </button>
    </form>


    <!-- SHOW SAVE RESULT MESSAGE -->
    <?php if ($saved_message != "") { ?>
        <div style="padding:15px;margin-top:20px;background:#004d00;border-radius:10px;text-align:center;">
            <?= $saved_message ?>
        </div>
    <?php } ?>


    <!-- SHOW ERROR MESSAGE -->
    <?php if ($error_message != "") { ?>
        <div style="padding:15px;margin-top:20px;background:#660000;border-radius:10px;text-align:center;">
            <?= $error_message ?>
        </div>
    <?php } ?>


    <!-- NO RESULT FOUND -->
    <?php if ($search_date_display != "" && count($results) == 0) { ?>
        <div style="padding:15px;margin-top:20px;background:#550000;border-radius:10px;text-align:center;">
            ❌ No data found for <b><?= $search_date_display ?></b>
        </div>

        <!-- SAVE FORM -->
        <form method="POST" style="margin-top:20px;">
            <input type="hidden" name="save_date" value="<?= $search_date_display ?>">

            <input type="text" name="save_name" placeholder="Enter your name"
                style="width:100%;padding:15px;border-radius:10px;border:none;margin-bottom:15px;font-size:18px;background:rgba(255,255,255,0.2);color:white;" 
                required
            >

            <button style="width:100%;padding:15px;background:#00ffe7;border:none;border-radius:10px;font-size:18px;font-weight:bold;color:black;">
                Save This Searched Date
            </button>
        </form>
    <?php } ?>


    <!-- RESULTS -->
    <?php if (count($results) > 0) { ?>
        <h2 style="margin-top:20px;text-align:center;">Results for <?= $search_date_display ?></h2>
        <table style="width:100%;margin-top:20px;border-collapse:collapse;">
            <tr>
                <th style="padding:12px;background:rgba(255,255,255,0.25);border-radius:10px 0 0 0;">Notes</th>
                <th style="padding:12px;background:rgba(255,255,255,0.25);">Symbol</th>
                <th style="padding:12px;background:rgba(255,255,255,0.25);border-radius:0 10px 0 0;">Date</th>
            </tr>

            <?php foreach ($results as $r) { ?>
                <tr>
                    <td style="padding:12px;text-align:center;"><?= $r["notes"] ?></td>
                    <td style="padding:12px;text-align:center;"><?= $r["symbols"] ?></td>
                    <td style="padding:12px;text-align:center;"><?= $r["date"] ?></td>
                </tr>
            <?php } ?>
        </table>
    <?php } ?>

</div>
<footer>
    <p>&copy; 2025 Date Finder. All rights reserved.</p>
</footer>


<script>
function showPage(page) {
    // hide all
    document.getElementById("homePage").style.display = "none";
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";

    // show selected
    if (page === "home") {
        document.getElementById("homePage").style.display = "block";
    } else if (page === "about") {
        document.getElementById("aboutPage").style.display = "block";
    } else if (page === "contact") {
        document.getElementById("contactPage").style.display = "block";
    }
}
</script>

</body>
</html>
