<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Needs_model extends CI_Model {

    /**
     * Data table for class manipulation
     */
    protected $table = "needs";

    /**
     * Inserts data in the needs table
     *
     * @param Array $data - Assocative array of field/values to be added to table
     * @return Boolean indicating success of insertion
     */
    public function save($data) {
        return $this->db->insert($this->table, $data);
    }

    /**
     * Finds and returns data and rows with desired association
     *
     * @param Array or String $where - Name of field to compare or associative
    *                                  array to compare from table
     * @return Array containing rows with desired association
     */
    public function find($where) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('households', 'households.idhousehold = ' . $this->table . '.householdId')
                        ->where($where)
                        ->order_by('needDate', 'DESC')
                        ->get()
                        ->result();
    }

    /**
     * Returns all rows in needs table
     * 
     * @return Array containing all the rows 
     */
    public function getAll() {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('households', 'households.idhousehold = ' . $this->table . '.householdId')
                        ->order_by('needDate', 'DESC')
                        ->get()
                        ->result();
    }

    /**
     * Displays a certain number rows in table
     *
     * @param Integer $nbre - number of rows to limit the results to
     * @param Integer $base - number of rows to skip
     * @return Array with the desired number of rows returned by the query
     */
    public function show($nbre, $base = 0) {
        return $this->db->select('*')
                        ->from($this->table)
                        ->join('households', 'households.idhousehold = ' . $this->table . '.householdId')
                        ->limit($nbre, $base)
                        ->order_by('needDate', 'DESC')
                        ->get()
                        ->result();
    }

    /**
     * Modifies records in table 
     *
     * @param Array $data - Assocative array of field/values to be added to table
     * @param Array or string $where - Name of field to compare or associative
    *                                  array to compare from table
     * @return Boolean indicating success of update
     */
    public function update($data, $where) {
        return $this->db->where($where)
                        ->update($this->table, $data);
    }

    /**
     * Deletes all rows with desired association
     *
     * @param Array or String $where - Name of field to compare or associative
    *                                  array to compare from table
     * @return Boolean indication success of deletion 
     */
    public function delete($where) {
        return $this->db->where($where)
                        ->delete($this->table);
    }
    
    /**
     * Counts the number of rows with desired association  
     *
     * @param Array $data - desired value
     * @return Integer num rows 
     */
    public function count($data = NULL) {
        return $this->db->where($data)
                        ->count_all($this->table);
    }

}