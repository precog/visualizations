package dom;

import dom.Dom;
import dom.Env;

class HTMLElementExtensions {
  public static function getStyle(elem: HTMLElement, style: String) {
    return if (untyped Env.document.getComputedStyle != null) {
      Env.document.getComputedStyle(elem).getPropertyValue(style);
    } else if (untyped elem.currentStyle != null) {
      untyped elem.currentStyle[style];
    } else "";
  }
}