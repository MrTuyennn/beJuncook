#### Structuring the Project

src/
├── domain/
│ ├── entities/
│ └── interfaces/
├── use-cases/
├── infrastructure/
│ ├── database/
│ └── repositories/
└── interface/
├── controllers/
└── routes/

1. Domain Layer: Contains the business logic, entities, and interfaces. This layer is independent of any other layers. (Chứa logic nghiệp vụ, thực thể và giao diện. Lớp này độc lập với bất kỳ lớp nào khác.)
2. Use Cases Layer: Contains the application's use cases or business rules.(Chứa các trường hợp sử dụng hoặc quy tắc kinh doanh của ứng dụng)
3. Infrastructure Layer: Contains implementations of the interfaces defined in the domain layer, such as database connections.(Chứa các triển khai của các giao diện được xác định trong lớp miền, chẳng hạn như các kết nối cơ sở dữ liệu.)
4. Interface Layer: Contains controllers, routes, and any other web framework-related code.(Chứa bộ điều khiển, tuyến đường và bất kỳ mã nào khác liên quan đến khung web)
