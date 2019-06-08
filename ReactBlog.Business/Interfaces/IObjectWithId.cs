namespace ReactBlog.Business.Interfaces
{
    /// <summary>
    /// Нужен, чтобы согласовать классы, которые наследуются от IdInfo, и которые не наслеуются, но имеют Id
    /// </summary>
    public interface IObjectWithId
    {
        int Id { get; set; }
    }
}