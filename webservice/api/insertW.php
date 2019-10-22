

<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;

        $data = [];
        if (isset($_POST['withdrawID'])) {
        //   # code...
          $data['withdrawID'] = ($_POST['withdrawID']);
          $data['withdrawNum'] = ($_POST['withdrawNum']);
          $data['date'] = ($_POST['date']);
          $data['EmployeeID'] = ($_POST['EmployeeID']);
          $data['ProductID'] = ($_POST['ProductID']);

          $Product = $product_model -> WithdrawProduct(($data));
          echo json_encode($Product);
        }

    
?>