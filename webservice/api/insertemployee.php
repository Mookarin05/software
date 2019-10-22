

<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/ProductModel.php');
    $product_model = new ProductModel;

        $data = [];
        if (isset($_POST['EmployeeID'])) {
          # code...
      
          $data['EmployeeID'] = ($_POST['EmployeeID']);
          $data['FirstName'] = ($_POST['FirstName']);
          $data['LastName'] = ($_POST['LastName']);
          $data['Username'] = ($_POST['Username']);
          $data['Password'] = ($_POST['Password']);
          $data['Tel'] = ($_POST['Tel']);
          $data['position'] = ($_POST['position']);
          
   $Product = $product_model -> insertemployee(($data));
   echo json_encode($Product);
        }

    
?>