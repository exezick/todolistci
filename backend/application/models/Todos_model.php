<?php
class Todos_model extends CI_Model {

    public function __construct()
    {
        $this->load->database();
        $this->load->helper(array('form', 'url'));
        $this->load->helper('url_helper');
        $this->load->library('ftp');
    }

    public function show_todos()
    {
        $query = $this->db->query('SELECT * FROM todos  ORDER BY id DESC');
        return $query->result_array();
    }

    public function save_todos($name)
    {
        $this->load->helper('url');

        $saveData = array(
        'name' 	=> 	$name,
        'complete' 	=> 	'false'
        );
        
        $save = $this->db->insert('todos', $saveData);
        if($save)
        {
            echo 1;
        }
        else 
        {
            echo 0;
        }
    }

    public function edit_todos()
    {
        
    }

    public function delete_todos()
    {
       
    }


}