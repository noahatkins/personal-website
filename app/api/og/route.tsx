import {ImageResponse} from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#000000",
          padding: "40px",
        }}
      >
        {/* Browser Chrome */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #333",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Browser Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              backgroundColor: "#111111",
              gap: "12px",
            }}
          >
            {/* Window Controls */}
            <div style={{display: "flex", gap: "8px"}}>
              <div style={{width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56"}} />
              <div style={{width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e"}} />
              <div style={{width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f"}} />
            </div>
            {/* URL Bar */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#2d2d2d",
                padding: "8px 16px",
                borderRadius: "6px",
                color: "#888",
                fontSize: "14px",
              }}
            >
              noahatkins.com
            </div>
          </div>

          {/* Content Area */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "",
              backgroundColor: "#000000",
              height: "100%",
            }}
          >
            {/* Code Editor */}
            <div
              style={{
                backgroundColor: "#1e1e1e",
                padding: "20px",
                borderRadius: "8px",
                width: "80%",
                fontFamily: "monospace",
                display: "flex",
                flexDirection: "column",
                fontSize: "45px",
                marginBottom: "60px",
              }}
            >
              <div style={{color: "#c678dd", display: "flex"}}>
                console<span style={{color: "#fff"}}>.</span>
                <span style={{color: "#61afef"}}>log</span>
                <span style={{color: "#fff"}}>(</span>
                <span style={{color: "#98c379"}}>'Hello World, I'm Noah.'</span>
                <span style={{color: "#fff"}}>);</span>
              </div>
            </div>

            {/* Name and Description */}
            {/* <div
              style={{
                textAlign: "center",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                width: "80%",
                background: "transparent",
                marginBottom: "40px",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2 style={{fontSize: "24px", fontWeight: "bold", margin: "0"}}>About</h2>
              </div>
              <p style={{fontSize: "16px", color: "rgb(156 163 175)", lineHeight: "1.5", textAlign: "left"}}>Technical problem solver with a passion for coding, sports, and exploring new places. Committed to creating meaningful impact through technology.</p>
            </div> */}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
