"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Plus,
  Edit,
  Trash2,
  LogOut,
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { productCategories } from "@/data/products";

interface ProductFormData {
  name: string;
  category: string;
  description: string;
  gsm: string;
  size: string;
  material: string;
  usage: string;
  color: string;
  packing: string;
  moq: string;
  delivery: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "add">("overview");
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    category: "shop-towels",
    description: "",
    gsm: "",
    size: "",
    material: "",
    usage: "",
    color: "",
    packing: "",
    moq: "",
    delivery: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        category: "shop-towels",
        description: "",
        gsm: "",
        size: "",
        material: "",
        usage: "",
        color: "",
        packing: "",
        moq: "",
        delivery: "",
      });
      setActiveTab("products");
    }, 2000);
  };

  const stats = [
    { icon: Package, label: "Total Products", value: productCategories.flatMap((c) => c.products).length.toString(), color: "from-blue-500 to-blue-600" },
    { icon: ShoppingCart, label: "Categories", value: productCategories.length.toString(), color: "from-amber-500 to-amber-600" },
    { icon: Users, label: "Active Clients", value: "500+", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, label: "Export Countries", value: "30+", color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-xs text-gray-500">Rohan Mirza Textiles</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden md:block">{session.user?.email}</span>
              <Button variant="outline" size="sm" onClick={() => signOut({ callbackUrl: "/admin/login" })}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "products", label: "Products", icon: Package },
              { id: "add", label: "Add Product", icon: Plus },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Products Overview */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Product Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productCategories.map((category) => (
                    <div key={category.id} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <span className="text-sm text-gray-500">{category.products.length} products</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.products.map((product) => (
                          <span
                            key={product.id}
                            className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200"
                          >
                            {product.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "products" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">All Products</h2>
                  <Button variant="primary" size="sm" onClick={() => setActiveTab("add")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">GSM</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Material</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productCategories.flatMap((category) =>
                        category.products.map((product) => (
                          <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-900">{product.name}</td>
                            <td className="py-3 px-4 text-gray-600 capitalize">{product.category.replace("-", " ")}</td>
                            <td className="py-3 px-4 text-gray-600">{product.features.gsm}</td>
                            <td className="py-3 px-4 text-gray-600">{product.features.material}</td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end space-x-2">
                                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                                  <Edit className="w-4 h-4 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                                  <Trash2 className="w-4 h-4 text-red-600" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {activeTab === "add" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Product</h2>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                  >
                    Product added successfully!
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., Premium Shop Towel"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                      >
                        {productCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                        placeholder="Product description..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GSM *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.gsm}
                        onChange={(e) => setFormData({ ...formData, gsm: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., 80-120 GSM"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Size *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., 30cm x 35cm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Material *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.material}
                        onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., 100% Cotton Blend"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Usage *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.usage}
                        onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., Industrial Cleaning"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color Options
                      </label>
                      <input
                        type="text"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., White, Blue, Green"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Packing
                      </label>
                      <input
                        type="text"
                        value={formData.packing}
                        onChange={(e) => setFormData({ ...formData, packing: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., 100 pcs/roll"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        MOQ
                      </label>
                      <input
                        type="text"
                        value={formData.moq}
                        onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., 500 rolls"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Time
                      </label>
                      <input
                        type="text"
                        value={formData.delivery}
                        onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        placeholder="e.g., 15-20 days"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={submitting}
                      className="flex-1"
                    >
                      {submitting ? "Adding..." : "Add Product"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setFormData({
                        name: "",
                        category: "shop-towels",
                        description: "",
                        gsm: "",
                        size: "",
                        material: "",
                        usage: "",
                        color: "",
                        packing: "",
                        moq: "",
                        delivery: "",
                      })}
                    >
                      Clear Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}
