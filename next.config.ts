import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tin-tuc/lich-cong-tac",
        destination: "https://lichtuan.apag.edu.vn/index.php?route=apag/calendar",
        permanent: false,
      },
      {
        source: "/:locale/tin-tuc/lich-cong-tac",
        destination: "https://lichtuan.apag.edu.vn/index.php?route=apag/calendar",
        permanent: false,
      },
      {
        source: "/hoc-lieu/thu-vien",
        destination: "http://113.190.240.60:8080/phamquangquyen/",
        permanent: false,
      },
      {
        source: "/:locale/hoc-lieu/thu-vien",
        destination: "http://113.190.240.60:8080/phamquangquyen/",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
