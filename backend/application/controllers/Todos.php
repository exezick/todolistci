<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class Todos extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
        $this->load->helper('url_helper');
        $this->load->model('todos_model');
        $this->load->library('ftp');
    }

    public function index($todos='')
    {
        if($todos == "view"){
            echo $this->view();
        }
        else if($todos == "create")
        {
            echo $this->create();
        }
        else if($todos == "edit")
        {
            echo $this->edit();
        }
        else if($todos == "remove")
        {
            echo $this->remove();
        }
        else {
            echo 'Todos with codeigniter';
        }
       
    }

    public function view()
    {
        $this->load->helper('url');

        $data = $this->todos_model->show_todos();
        return json_encode($data);
    }

    public function create()
    {
        echo 'create todo';
    }

    public function edit()
    {
        echo 'edit todo';
    }

    public function remove()
    {
        echo 'delete todo';
    }
    
}