<?
if (isset($_GET['shoot'])) {   // '5x5' - string
    print($_GET['shoot']);
    $coords = explode('x', $_GET['shoot']);
    header('Location: /');  // redirect to main page
    // var_dump ($coords);
    // print ($coords[0]);
    // print ($coords[1]);
}


?>