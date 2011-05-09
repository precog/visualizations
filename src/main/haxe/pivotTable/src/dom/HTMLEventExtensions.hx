package dom;

import dom.Dom;
import dom.Env;

class HTMLEventExtensions {
  public static function cancelBubbling(e: EventListener<Dynamic>): Void {
    var cancelBubble = untyped e.cancelBubble;
    if (cancelBubble != null) {
      untyped e.cancelBubble = true;
    }
    else {
      untyped e.stopPropagation();
    }
  }
  
  public static function getRelatedTarget(event: EventListener<Dynamic>): HTMLElement {
    var ms: HTMLElement  = untyped event.toElement;
    var net: HTMLElement = untyped event.relatedTarget;
    return if (ms != null) { 
      ms; 
    } else if (net != null) {
      net;
    } else null;
  }
}