<?php
require('./vendor/autoload.php');
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();  
class config
{
    private $DBHOST = null;
    private $DBUSER = null;
    private $DBPASS = null;
    private $DBNAME = null;
    private $DSN = null;
    public $condb = null;

    public function __construct()
    {
        try {
			$this->DBHOST = $_ENV['DBHOST'];
			$this->DBUSER = $_ENV['DBUSER'];
			$this->DBPASS = $_ENV['DBPASS'];
			$this->DBNAME = $_ENV['DBNAME'];
            $this->condb = new PDO("mysql:host=" . $this->DBHOST . ";dbname=" . $this->DBNAME, $this->DBUSER, $this->DBPASS);
            $this->condb->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "" . $e->getMessage() . "";
            die("Error" . $e->getMessage());
        }
    }
}
?>