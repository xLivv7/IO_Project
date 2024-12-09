import { createClient } from "@supabase/supabase-js"

const projectURL = import.meta.env.VITE_SUPABASE_URL;
const projectKEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(projectURL, projectKEY);

export default supabase;


