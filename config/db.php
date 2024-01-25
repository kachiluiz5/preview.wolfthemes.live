<?php

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'your_database_name');

// Create a connection to the database
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Function to execute a parameterized query
function executeQuery($query, $params = array()) {
    global $conn;

    $stmt = mysqli_prepare($conn, $query);

    // Bind parameters if they exist
    if (!empty($params)) {
        $types = "";
        $values = array();

        foreach ($params as $param) {
            $types .= getParamType($param);
            $values[] = $param;
        }

        mysqli_stmt_bind_param($stmt, $types, ...$values);
    }

    // Execute the statement
    mysqli_stmt_execute($stmt);

    // Get the result (if any)
    $result = mysqli_stmt_get_result($stmt);

    // Fetch data if it's a SELECT query
    if ($result !== false) {
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        mysqli_free_result($result);
        mysqli_stmt_close($stmt);
        return $data;
    }

    // Return the affected rows for other queries
    $affectedRows = mysqli_stmt_affected_rows($stmt);
    mysqli_stmt_close($stmt);
    return $affectedRows;
}

// Function to get the parameter type for binding
function getParamType($param) {
    if (is_int($param)) {
        return 'i';  // Integer
    } elseif (is_float($param)) {
        return 'd';  // Double
    } else {
        return 's';  // String
    }
}

?>
