import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { Categories } from "@ydemy/protobuf/model/category";
import { listCategoriesUseCase } from "@core/category/usecase/listCategories";
import { Empty } from "@ydemy/protobuf/google/protobuf/empty";

export const CategoryQueryController = {
  async listCategories(
    call: ServerUnaryCall<Empty, Categories>,
    callback: sendUnaryData<Categories>,
  ) {
    try {
      const categories = await listCategoriesUseCase();

      callback(null, { categories });
    } catch (e) {
      callback({ code: 13, message: "Internal" }, null);
    }
  },
};
