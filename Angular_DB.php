<?php 

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
$json = file_get_contents('php://input');
$param = json_decode($json, true);

//------------------------------ GET THE ANGUALAR API DATA IN PHP PAGES -------------------------------

ini_set('memory_limit', '1024M');
ini_set('error_reporting', E_ALL ^ E_NOTICE);
ini_set('session.bug_compat_42',1);
ini_set('session.bug_compat_warm',0);
ini_set('max_execution_time', 600);
ini_set('upload_max_filesize', '500M');
ini_set('post_max_size', '500M');
ini_set('max_input_time', -1);
ini_set('max_execution_time', -1);
ini_set('display_errors',false);
date_default_timezone_set("Asia/Kolkata");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'mysql');
define('DB_NAME', 'angular_version_9');
define('APP_LEVEL', '4');

function database_connect() {
	$con=mysqli_connect(DB_HOST,DB_USER,DB_PASS) or die("Database Connection Error");
	if(!$con) {
	echo "could not connect";
	}
	$db=mysqli_select_db($con,DB_NAME) or die("Select Database Error");
	if(!$db) {
		echo "No database found";
	}
}

database_connect();

function showDBData($selQuery) {
	$link = mysqli_connect(DB_HOST, DB_USER,DB_PASS,DB_NAME);
	$result = mysqli_query($link,$selQuery) or die(mysqli_error($link));
	$records=mysqli_fetch_all($result,MYSQLI_ASSOC);
	if($records!=null) {
		return $records;
	} else {
		return 0;
	}
}


// Delete the DB Records
function deleteDBData($delQuery) {
	// $delQueryRes = mysql_query($delQuery) or die("Delete Query Error -> ".mysql_error());
	$link = mysqli_connect(DB_HOST, DB_USER,DB_PASS,DB_NAME);
	$result = mysqli_query($link,$delQuery) or die("Delete Query Error -> ".mysqli_error($link));
	return mysqli_affected_rows($link);
}

// Update the DB Records
function updateDBData($updateQuery) {
	$link = mysqli_connect(DB_HOST, DB_USER,DB_PASS,DB_NAME);
	$updateQueryRes = mysqli_query($link,$updateQuery) or die("Update Query Error -> ".mysqli_error($link));
	return mysqli_affected_rows($link);
}

// Inserting Records into DB
function insertDBData($insertQuery) {
	$link = mysqli_connect(DB_HOST, DB_USER,DB_PASS,DB_NAME);
	$insertQueryRes = mysqli_query($link,$insertQuery) or die("Insert Query Error -> ".mysqli_error($link));
	return mysqli_insert_id($link);
}

class allFunction{
public function All_function_Details($param){
	$return=json_encode($param);
    $data=json_decode($return);
    
    if($data->from=="User_Details"){

    	if($data->action=="List"){

           $getempdata=showDBData("SELECT user.user_id as id,user.user_firstname as first_name,user.user_lastname as last_name,user.user_email_id as email_id,user.user_mobile_no as mobileno,user.user_address as Empolyee_address,user.user_gender as gender,user.user_password as pass 
                  FROM user_details as user");

             if($getempdata){
                  echo json_encode(['code'=>'1','status'=>true,'content'=>$getempdata,'message'=>'Data avilable']);
             }else{
                  echo json_encode(['code'=>'2','status'=>false,'message'=>'No data avilable']);
             }
            

    	}else if($data->action=="add"){ 
        //  base64_encode
      $fiedls=$data->Form;
      $user_firstname=$fiedls->empolyee_code;
      $user_lastname=$fiedls->empolyee_name;
      $user_email_id=$fiedls->user_name;
      $user_mobile_no=$fiedls->user_password;
      $user_gender=$fiedls->employee_category;
      $user_confirm_password=$fiedls->empolyee_designation;
      $user_password=$fiedls->marital_status;
      $user_file=$fiedls->empolyee_address;
      $user_address=$fiedls->employee_status;

        $uploads_dir ='./uploads';

      if($_FILES) {
        $tmp_name=$_FILES["Document"]["tmp_name"];
        $name =basename($_FILES["Document"]["name"]);
        $imageName ='user_'.date('dmyHi').'.'.pathinfo($_FILES["Document"]['name'],PATHINFO_EXTENSION);
        if($imageName){
          if(move_uploaded_file($tmp_name,"$uploads_dir/$imageName")==false) {
            $ret_arr=['code'=>'3','status'=>false,'message'=>'Please try again.. Failed to upload agency file..'];
            $rollBack=true; 
          }  else {
            $data['image']=trim($imageName);
          }
        } else {
          $ret_arr=['code'=>'3','status'=>false,'message'=>'Please select valid format for agency file..'];
          $rollBack=true; 
        }
      }

    	
     $getemp=showDBData("SELECT emp.user_id as id FROM user_details as user WHERE user.user_firstname='".$emp_name."'");
    	  if($getemp[0]['id']==''){
    	   	 insertDBData("INSERT INTO user_details SET user_firstname='".$user_firstname."', user_lastname='".$user_lastname."',user_email_id='".$user_email_id."' , user_mobile_no='".$user_mobile_no."',user_gender='".$user_gender."',user_address ='".$user_address."',user_password='".$empolyee_design."',user_password='".base64_encode($user_password)."',user_confirm_password='".base64_encode($user_confirm_password)."',user_file ='".$imageName."',createDate=now(),updateDate=now()");

                echo json_encode(['code'=>'1','status'=>true,'message'=>'Insert data succecssfully']);
    	   }else {
    	        echo json_encode(['code'=>'2','status'=>false,'message'=>'Already exist data']);
    	   }
          
           }

      }
        return $ret_arr;
    }
 }

   $access= new allFunction;
   $output=$access->All_function_Details($param);

    return $output;

        // ------------------------------SOURCE CODE TO BE START WITH THERE--------------------------


?>
