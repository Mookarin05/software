<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $Product_Model = new ProductModel;
    $Product = $Product_Model -> getDataproduct();
    echo json_encode($Product);