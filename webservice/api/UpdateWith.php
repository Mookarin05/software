<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;
        $data = [];
        $data['ProductID'] =  $_POST['ProductID'];
        $data['withdrawNum'] = $_POST['withdrawNum'];
 
    $Product = $product_model -> UpdateWith($data);

  // echo $Product;
    echo json_encode($Product);
    
?>