import Dashboard from "@/components/dashboard/Dashboard";
import supabase from "@/supabase";

export const revalidate = 0;
export default async function Shop({ params }) {
  const { storeid } = params;
  if (!storeid) return;

  const { data, error } = await supabase
    .from("stores")
    .select(
      "products (product_id, title, quantity,images,price),orders (delivered, amount)"
    )
    .eq("store_id", storeid)
    .single();

  // TODO remove logs
  // --> Sales = cal Balance/ orders/ products

  return <Dashboard data={data} storeid={storeid} />;
}
