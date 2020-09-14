const { addNewVisitor,  deleteRecorde, deleteVisitorRecorders, updateRecord, listData} = require("../src/node_sql");

describe("insertinng values into the database", ()=> {
    it("should insert values to visitors table ", () => {
       const  addNewVisitor = jasmine.createSpy('addNewVisitor')
       addNewVisitor('gg',12,'01-01-05','18:00', "fafs","sgsff")
            expect(addNewVisitor).toHaveBeenCalledWith('gg',12,'01-01-05','18:00', "fafs","sgsff")
        })
    })

var update;
describe("", ()=> {
    beforeEach(function() {
       update= jasmine.createSpyObj('update', ["updateRecord","listData"]);
        update.updateRecord();
        update.listData();
  	});
    it("should update record", () => {
        expect(update.updateRecord).toHaveBeenCalled();
    })
    it("should list all visitors", () => {
        expect(update.updateRecord).toHaveBeenCalled();
    })
})

describe('delette records from visitor table', ()=>{
    it("should delete a visitor", () => {
        const deleteRecorde = jasmine.createSpy('deleteRecorde')
        deleteRecorde()
        expect(deleteRecorde).toHaveBeenCalled();
    })
    it('should delet all visitor records', () => {
 expect(deleteVisitorRecorders).toBeNull;
})
})

