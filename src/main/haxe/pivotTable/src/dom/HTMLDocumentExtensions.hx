package dom;

import dom.Dom;
import dom.Env;
import dom.Double;

class HTMLDocumentExtensions {
  
  public static function newElement(document: HTMLDocument, eType: String, ?atts: Array<Double<String>> = null,  ?style: String = ""): HTMLElement {
    var element = document.createElement(eType);
    
    for (i in 0...atts.length) {
      element.setAttribute(atts[i]._1, atts[i]._2);
    }
    
    element.style.cssText = style;
    return element;
  }
  
  public static function getId(doc: HTMLDocument, s: String): HTMLElement {
    return doc.getElementById(s);
  }
  
  public static function getIds(doc: HTMLDocument, a: Array<String>): Array<HTMLElement> {
    var result: Array<HTMLElement> = [];
    
    for (i in 0...a.length) {
      result.push(getId(doc, a[i]));
    }
    
    return result;
  }
  
  public static function getTags(doc: HTMLDocument, s: String): Array<HTMLElement> {
    return cast doc.getElementsByTagName(s);
  }
  
  public static function getClasses(doc: HTMLDocument, s: String): Array<HTMLElement> {
    return cast Env.getElementsByClass(s);
  }
}