<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;

    echo $_GET["EmployeeID"];
    $Product = $product_model -> deleteEmp($_GET["EmployeeID"]);

  // echo $Product;
    echo json_encode($Product);
    
?>