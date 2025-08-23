declare module "tianditu" {
  export interface LngLat {
    lng: number;
    lat: number;
  }

  export class Map {
    constructor(container: string | HTMLElement, options?: MapOptions);
    centerAndZoom(lnglat: LngLat, zoom: number): void;
    setMapType(type: string): void;
    addControl(control: any): void;
    addOverLay(overlay: any): void;
    // 添加其他你需要的方法声明
  }

  export interface MapOptions {
    projection?: string;
    minZoom?: number;
    maxZoom?: number;
  }

  // 声明全局变量
  declare const T: {
    Map: typeof Map;
    LngLat: typeof LngLat;
    // 添加其他你需要的类和方法
  };

  export default T;
}
