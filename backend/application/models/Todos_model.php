<?php
class Todos_model extends CI_Model {

    public function __construct()
    {
        $this->load->database();
        $this->load->helper('url_helper');
    }

    public function show_todos()
    {
        $query = $this->db->query('SELECT * FROM todos  ORDER BY id ASC');
        return $query->result_array();
        
    }

    public function save_todos()
    {
        
    }

    public function edit_todos()
    {
        
    }

    public function delete_todos()
    {
       
    }


}