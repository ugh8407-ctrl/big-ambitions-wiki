import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#ff7a18,#ffd43b 55%,#2b74ff)",color:"#090a0c",fontSize:27,fontWeight:900,borderRadius:14 }}>BA</div>,
    size,
  );
}
