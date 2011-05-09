package dom;

import dom.Dom;
import dom.Env;

class HTMLElementExtensions {
  public static function getStyle(elem: HTMLElement, style: String) {
    return if (untyped Env.window.getComputedStyle != null) {
      Env.window.getComputedStyle(elem, null).getPropertyValue(style);
    } else if (untyped elem.currentStyle != null) {
      untyped elem.currentStyle[style];
    } else "";
  }
  
  public static function append(elem: HTMLElement, child: HTMLElement): HTMLElement {
    elem.appendChild(child);
    return elem;
  }
  
  public static function withStyle(elem: HTMLElement, name: String, value: String): HTMLElement {
    Reflect.setField(elem.style, name, value);
    return elem;
  }
  
  public static function html(elem: HTMLElement, text: String): HTMLElement {
    elem.innerHTML = text;
    return elem;
  }
}