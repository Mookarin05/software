<?php
require_once("BaseModel.php");
class ProductModel extends BaseModel{
    
    function __construct(){
        if(!static::$db){
            static::$db = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);
            mysqli_set_charset(static::$db,"utf8");
        }
    }

   

    function getDataproduct() {
        $sql = "SELECT * FROM `product` WHERE 1";

        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
    
        }
    }


    function UpdateProduct($data){
      
        $sql = "UPDATE `product` SET `ProductID` = '".$data['ProductID']."', `CategoryID` = '".$data['CategoryID']."', `ProductName` = '".$data['ProductName']."', `Quantity` = '".$data['Quantity']."', `Price` = '".$data['Price']."' WHERE `product`.`ProductID` = '".$data['ProductID']."';
        ";
 
            if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
                return 1;
            }else {
                return 0;
            }
    }


    
    function showemp(){
      
        $sql = "SELECT * FROM `employee` WHERE 1";

        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
            // return $dataSearch;
        }
    }

    function UpdateEmployee($data){    
        $sql = "UPDATE
        `employee`
        SET
        `EmployeeID` = '".$data['EmployeeID']."',
        `FirstName` = '".$data['FirstName']."',
        `LastName` = '".$data['LastName']."',
        `Username` = '".$data['Username']."',
        `Password` = '".$data['Password']."',
        `Tel` = '".$data['Tel']."',
        `position` = '".$data['position']."'
        WHERE
        `employee`.`EmployeeID` = '".$data['EmployeeID']."'
        ";
 
            if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
                return 1;
            }else {
                return 0;
            }
    }


    function UpdateWith($data){    
        $sql = "UPDATE
        `product`
    SET
        `Quantity` =(
            (
            SELECT
                product.Quantity
            FROM
                `product`
            WHERE
                ProductID = '".$data['ProductID']."'
        ) - '".$data['withdrawNum']."'
        )
    WHERE
        ProductID = '".$data['ProductID']."'
        ";
 
            if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
                return 1;
            }else {
                return 0;
            }
    }





    function insertemployee($data){
        $sql = "INSERT INTO `employee` (`EmployeeID`, `FirstName`, `LastName`, `Username`, `Password`, `Tel`, `position`) 
        VALUES (
            '".$data['EmployeeID']."', 
            '".$data['FirstName']."', 
            '".$data['LastName']."', 
            '".$data['Username']."',
            '".$data['Password']."', 
            '".$data['Tel']."', 
            '".$data['position']."'
            )

        ";
        //  echo "<pre>";
        //  print_r( $sql);
        //  echo "</pre>";
       
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
        }
    

        function insertProduct($data){
            $sql = "INSERT INTO product(ProductID, CategoryID,ProductName,Quantity,Price,Image)VALUES('".$data['ProductID']."', '".$data['CategoryID']."','".$data['ProductName']."', '".$data['Quantity']."','".$data['Price']."', '".$data['Image']."')";
            //  echo "<pre>";
            //  print_r( $sql);
            //  echo "</pre>";
            if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
                return 1;
                }else {
                return $sql;
                }

            }


            function WithdrawProduct($data){
                $sql = "INSERT INTO withdraw(withdrawID, withdrawNum, date, EmployeeID,ProductID) 
                VALUES (
                    '".$data['withdrawID']."', 
                    '".$data['withdrawNum']."', 
                    '".$data['date']."',
                    '".$data['EmployeeID']."' ,
                    '".$data['ProductID']."'  
                    )
                ";
                //  echo "<pre>";
                //  print_r( $sql);
                //  echo "</pre>";
                if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
                    return 1;
                    }else {
                    return $sql;
                    }
    
                }


    function Login($data) {
        $sql = "SELECT
        *
        FROM
        `employee`
        WHERE
        employee.Username = '".$data['Username']."' AND employee.Password = '".$data['Password']."'";

       if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
        $data = [];
        while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
            $data[] = $row;
        }
        $result->close();
        return $data;
        }
    }

    function deleteEmp($EmployeeID){
        $sql = "DELETE FROM `employee` WHERE `employee`.`EmployeeID` = '$EmployeeID'
        ";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function deleteProduct($ProductID){
      
        $sql = "DELETE FROM `product` WHERE `product`.`ProductID` = '$ProductID',`product`.`CategoryID` = '$CategoryID',`product`.`Quantity` = '$Quantity'
";

        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

}


  