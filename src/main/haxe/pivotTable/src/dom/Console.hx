package dom;


class Console {
  private static var logger: Dynamic = untyped __js__ ("console");
  
  
  public static function log(m: String) {
    logger.log(m);
  }
  
  public static function debug(m: String) {
    logger.debug(m);
  }
  
  public static function info(m: String) {
    logger.info(m);
  }
  
  public static function warning(m: String) {
    logger.warn(m);
  }
  
  public static function error(m: String) {
    logger.error(m);
  }
}