<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;

        $data = [];
        if (isset($_POST['Username'])) {
          # code...
        $data['Username'] = ($_POST['Username']);
        $data['Password'] = ($_POST['Password']);
       
   $Product = $product_model -> Login(($data));

   //  echo $Product;
   echo json_encode($Product);
        }

    
?>