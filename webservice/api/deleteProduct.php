<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;
    $data = [];
    $data['ProductID'] =  $_GET["ProductID"];
    $data['Quantity'] =  $_GET["Quantity"];

    echo $_GET["ProductID"];
    echo $_GET["Quantity"];
    $Product = $product_model -> deleteProduct($data);

  // echo $Product;
    echo json_encode($Product);
    
?>