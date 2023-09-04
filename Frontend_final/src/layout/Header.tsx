import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useNavigate from "../hooks/useNavigate";
import logo from "../assets/logo.png";
import { useCookies } from "react-cookie";

export default function Header({ children }: { children: React.ReactElement }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [token] = useCookies(["token"]);
  const [role] = useCookies(["role"]);
  console.log(role);
  const { navigateTo } = useNavigate();
  return (
    <div>
      <header className="bg-white shadow-md w-screen">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover
              className="relative flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              onClick={() => navigateTo("/")}
            >
              {/* <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"> */}
              <a href="/">Trang chủ</a>
              {/* </Popover.Button> */}
            </Popover>

            <a
              href="/orders"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Đặt hàng
            </a>
           {  <a
              href="/admin"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Quản lý
            </a> }
            <a
              href="/cart"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Giỏ hàng
            </a>
          </Popover.Group>
          {Object.keys(token).length !== 0 ? (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Đăng xuất <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Đăng nhập <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Trang chủ</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <a href="/"> Trang chủ</a>
                    </Disclosure.Button>
                  </Disclosure>
                  <a
                    href="/orders"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Đặt hàng
                  </a>
                  <a
                    href="/admin"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Quản lý
                  </a>
                  <a
                    href="/cart"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Giỏ hàng
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Đăng nhập
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {children}
    </div>
  );
}
