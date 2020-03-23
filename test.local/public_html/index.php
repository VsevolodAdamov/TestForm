<?php


class Database{

    private $link;

    /**
     * Database constructor.
     */

    public function  __construct()
    {
        $this -> connect();
    }

    /**
     * @return $this
     */

    private function connect()
    {
        $config = require_once 'Message/Config/config.php';

        $dsn = 'mysql:host='.$config['host'].';dbname='.$config['db_name'].';';

        $this->link = new PDO($dsn, $config['username'], $config['password']);

        return $this;
    }

    /**
     * @param $sql
     * @return mixed
     */

    public function execute($dataform)
    {
        $sth = $this->link->prepare('INSERT INTO mytable4 (name, text, image) VALUES (:name, :text, :image)');
        return $sth->execute($dataform);
    }

    /**
     * @param $sql
     * @return array
     */

    public function showselect($number) {

        $sth = $this->link->query("SELECT name, text FROM mytable4  LIMIT {$number}");
        $data = $sth->fetchAll(PDO::FETCH_ASSOC);
        return  json_encode($data);
    }

}

$db = new Database();


