import { Layout } from "antd";
import Image from "next/image";
const { Footer } = Layout;
import logo from "../assets/Mohamed Magdy Logo.png";

const FooterComponent = () => {
  return (
    <Footer className="w-full flex flex-col sm:flex-row justify-between items-center p-6 border-t border-gray-300 bg-gray-50">
      {/* Copyright Section */}
      <p className="text-gray-600 text-sm sm:text-base">
        © {new Date().getFullYear()} My Pagination App. All rights reserved.
      </p>

      {/* Developer Section */}
      <div className="flex items-center text-gray-600 text-sm sm:text-base mt-4 sm:mt-0">
        <Image
          src={logo}
          alt="Mohamed Magdy"
          width={40}
          height={40}
          className="rounded-full mr-2"
        />
        <span>
          Developed by{" "}
          <a
            href="https://github.com/MohamedMagdy63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Mohamed Magdy
          </a>
        </span>
      </div>
    </Footer>
  );
};

export default FooterComponent;
