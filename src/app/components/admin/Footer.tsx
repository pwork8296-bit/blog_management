import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400 mt-auto">
      © All rights reserved by{" "}
      <a
        href="https://windmillui.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 dark:text-purple-400 hover:underline"
      >
        WindmillUI
      </a>
      . Distributed by{" "}
      <a
        href="https://themewagon.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 dark:text-purple-400 hover:underline"
      >
        ThemeWagon
      </a>
      .
    </footer>
  );
}
