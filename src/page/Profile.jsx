import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserIcon, HomeIcon, CreditCardIcon, BellIcon, LockClosedIcon, HeartIcon } from '@heroicons/react/24/solid';

function Profile() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="w-full flex-1 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <nav className="md:col-span-1 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold text-gray-900">Account Settings</h2>
                <ul className="space-y-1">
                  <li>
                    <a className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white" href="#">
                      <UserIcon className="mr-3 h-5 w-5" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100" href="#">
                      <HomeIcon className="mr-3 h-5 w-5" />
                      Addresses
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100" href="#">
                      <CreditCardIcon className="mr-3 h-5 w-5" />
                      Payment Methods
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100" href="#">
                      <BellIcon className="mr-3 h-5 w-5" />
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100" href="#">
                      <LockClosedIcon className="mr-3 h-5 w-5" />
                      Security
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100" href="#">
                      <HeartIcon className="mr-3 h-5 w-5" />
                      Wishlist
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="md:col-span-3 rounded-xl bg-white p-8 shadow-sm">
                <div className="space-y-12">
                  <div className="border-b border-gray-200 pb-12">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="photo">Photo</label>
                        <div className="mt-2 flex items-center gap-x-3">
                          <div className="h-24 w-24 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARXlmdE3XW1xL-V-on7re1LRXir5SN1_E-1uEqrIF3DUKvpk0EM70Lb1BS6EiWB8LWzfNVN1LfDzXQQqMnWA2wF-p8BDKQMpo5hiDrokFf26uTz5w3fsjqnVltdwA74qKG9xGv2H-_Amver7DNxCmkTMqf2zxtsnyiA_u3FJ9qcSseht8yoJRel6SmetJm33pcpD7mZwOGjjdqKQVsNQR-wLNrBlqvQvcjI57kyQDwKrrTuoSm33XjMpH4eltVwhWzh77ANS_WVCNP")' }}></div>
                          <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" type="button">
                            Change
                          </button>
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="full-name">Full Name</label>
                        <div className="mt-2">
                          <input autoComplete="name" className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="full-name" name="full-name" type="text" />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="username">Username</label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">shopwise.com/</span>
                            <input autoComplete="username" className="block flex-1 border-0 bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" id="username" name="username" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">Contact Information</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email address</label>
                        <div className="mt-2">
                          <input autoComplete="email" className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="email" name="email" type="email" />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="phone-number">Phone Number</label>
                        <div className="mt-2">
                          <input autoComplete="tel" className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="phone-number" name="phone-number" type="tel" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">Security</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="current-password">Current Password</label>
                        <div className="mt-2">
                          <input className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="current-password" name="current-password" type="password" />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="new-password">New Password</label>
                        <div className="mt-2">
                          <input className="block w-full rounded-lg border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="new-password" name="new-password" type="password" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button className="text-sm font-semibold leading-6 text-gray-900" type="button">Cancel</button>
                    <button className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;