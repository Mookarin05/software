

<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;

        $data = [];
        if (isset($_POST['ProductID'])) {
        //   # code...
          $data['ProductID'] = ($_POST['ProductID']);
          $data['CategoryID'] = ($_POST['CategoryID']);
          $data['ProductName'] = ($_POST['ProductName']);
          $data['Quantity'] = ($_POST['Quantity']);
          $data['Price'] = ($_POST['Price']);
          $data['Image'] = ($_POST['Image']);

          $Product = $product_model -> insertProduct(($data));
          echo json_encode($Product);
        }

    
?>