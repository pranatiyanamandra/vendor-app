import Vendor from "@models/vendor";
import { connectToDB } from "@utils/database"

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const vendor = await Vendor.findById(params.id).populate('creator')
        if (!vendor) {
            return new Response('Vendor Not Found', { status: 404 });
        }
        return new Response(JSON.stringify(vendor), { status: 200 });
    } catch (error) {
        return new Response('Failed to fetch all vendors', { status: 500 });
    }
}

export const PATCH = async (req, { params }) => {
    const { vendor } = await req.json();
    try {
        await connectToDB();
        const existingVendor = await Vendor.findById(params.id);
        if (!existingVendor) {
            return new Response('Vendor Not Found', { status: 404 });
        }
        existingVendor.vendor = vendor;
        await existingVendor.save();
        return new Response(JSON.stringify(existingVendor), { status: 200 })

    } catch (error) {
        return new Response("Failed to update vendor", { status: 500 })
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();
        await Vendor.findByIdAndRemove(params.id);

        return new Response('Vendor deleted successfully', { status: 200 })

    } catch (error) {
        return new Response("Failed to delete vendor", { status: 500 })
    }
}