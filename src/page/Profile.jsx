import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  UserIcon,
} from "@heroicons/react/24/solid";
import { getAllProfiles, createProfile, updateProfile } from "../api";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/auth";


function Profile() {
  const [profileId, setProfileId] = useState(null);
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const user = getUser();
        if (!user) {
          navigate("/login");
          return;
        }
        
        setEmail(user.email);


        const response = await getAllProfiles();
        const profiles = response.data.data;
        const userProfile = profiles.find(p => p.userId === user.id);

        if (userProfile && userProfile.profile) {
          setProfileId(userProfile.profile.id);
          setName(userProfile.profile.name);
          setAddres(userProfile.profile.addres);
          setPhone(userProfile.profile.phone);
        }
      } catch (error) {
        setError("Gagal mengambil data profil");
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const user = getUser();
      if (!user) {
        navigate("/login");
        return;
      }

      const profileData = { name, addres, phone, userId: user.id };

      if (profileId) {
        await updateProfile(profileId, profileData);
      } else {
        await createProfile(profileData);
      }
      navigate("/");
    } catch (error) {
      setError("Gagal menyimpan data profil");
      console.error("Error saving profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="w-full flex-1 bg-gray-50">
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <nav className="md:col-span-1 rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-xl font-bold text-gray-900">
                    Account Settings
                  </h2>
                  <ul className="space-y-1">
                    <li>
                      <a
                        className="flex items-center rounded-lg bg-brand-secondary px-4 py-2 text-sm font-medium text-white hover:bg-brand-primary"
                        href="#"
                      >
                        <UserIcon className="mr-3 h-5 w-5" />
                        Profile
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="md:col-span-3 rounded-xl bg-white p-8 shadow-sm">
                  <div className="space-y-12">
                    <div className="border-b border-gray-200 pb-12">
                      <h2 className="text-2xl font-bold leading-7 text-gray-900">
                        Profile
                      </h2>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="mt-2 flex items-center gap-x-3">
                          <div
                            className="h-24 w-24 rounded-full bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARXlmdE3XW1xL-V-on7re1LRXir5SN1_E-1uEqrIF3DUKvpk0EM70Lb1BS6EiWB8LWzfNVN1LfDzXQQqMnWA2wF-p8BDKQMpo5hiDrokFf26uTz5w3fsjqnVltdwA74qKG9xGv2H-_Amver7DNxCmkTMqf2zxtsnyiA_u3FJ9qcSseht8yoJRel6SmetJm33pcpD7mZwOGjjdqKQVsNQR-wLNrBlqvQvcjI57kyQDwKrrTuoSm33XjMpH4eltVwhWzh77ANS_WVCNP")',
                            }}
                          ></div>
                          <button
                            className="rounded-md bg-white px-3 py-2 ml-8 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 cursor-pointer"
                            type="button"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <div className="mt-2">
                          <input
                            autoComplete="name"
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            placeholder="Full Name"
                            id="full-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-18">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">
                      Contact Information
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="email"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            autoComplete="email"
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-4">
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <div className="mt-2">
                          <input
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Address"
                            id="address"
                            value={addres}
                            onChange={(e) => setAddres(e.target.value)}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            autoComplete="phone"
                            className="block w-full rounded-lg border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            placeholder="08xxxxxxxxxx"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      className="text-sm font-semibold leading-6 text-gray-900"
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded-md bg-brand-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;